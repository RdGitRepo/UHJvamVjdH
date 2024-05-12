import { NavLink, Outlet, useLoaderData, Form, redirect, useSubmit, useNavigation } from 'react-router-dom';
import { createContact, getContacts } from './Contacts';
import { useEffect } from 'react';

export async function loader({request}){
    const url = new URL(request.url);
    const query = url.searchParams.get('query');
    const contacts = await getContacts(query);
    return {contacts, query} ;
}

export async function action(){
    const initializeContact = await createContact();
    return redirect(`/contacts/${initializeContact.id}/edit`);
}

export default function Home(){
  const {contacts, query} = useLoaderData();
  const submit = useSubmit();
  const navigation = useNavigation();

  useEffect(() => {
    document.getElementById("query").value = query;
  }, [query]);

  const searching = navigation.location && new URLSearchParams(navigation.location.search).has('query');
    return (
      <>
        <div className="sidebar">
          <h1>React Browser Router </h1>
          <div className="search-bar">
            <Form id="search-form">
              <div className="spinner">
                <i className="material-icons show" id='first' style={{display: !searching ? "none" : ""}}>cached</i>
                <i className="material-icons show">search</i>
              </div>
              <input
                type="search"
                name="query"
                id="query"
                placeholder="Search"
                aria-label="Search"
                defaultValue={query}
                onChange={(e) => {
                  const initial = query === null;
                    submit(e.currentTarget.form, {
                      replace: !initial,
                    })
                  }}
              />
            </Form>
            <Form id="create-form" method="post">
              <button type="submit">New</button>
            </Form>
          </div>
          <nav id="contact-list">
            {contacts.length ? (
              <ul>
                {contacts.map((contact) => {
                  return (
                    <li key={contact.id}>
                      <NavLink to={`/contacts/${contact.id}`}>
                        {contact.first || contact.last ? (
                          <>
                            {contact.first} {contact.last}
                          </>
                        ) : (<i>No Name</i>)}
                        {contact.favorite && <span>★</span>}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p>
                <i>No Contact</i>
              </p>
            )}
          </nav>
        </div>
        <div id="detail">
          <Outlet />
        </div>
      </>
    );
}