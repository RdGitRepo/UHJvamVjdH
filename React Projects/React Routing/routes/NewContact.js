import { useLoaderData, Form, useFetcher } from 'react-router-dom';
import { getContact, updateContact } from "../Contacts";

export async function loader({params}){
    const contact = await getContact(params.contactId);
    console.log("load")
    return contact;
}

export async function action({params, request}){
    const formData = await request.formData();
    return updateContact(params.contactId, {
        favorite: formData.get('favorite') === 'true',
    })
}

export default function Contact(){
    const contact = useLoaderData();

    // const contact = {
    //     first:'Asseylum',
    //     last:'Allusia',
    //     favorite:false,
    //     avatar:`https://source.unsplash.com/178j8tJrNlc`,
    //     twitter:'@Assylum12345',
    //     notes:'Empress of vers empire',
    // }
    return(
        <div id="contact">
            <div id="img">
                <img 
                src={contact.avatarUrl || null}
                alt={`image of ${contact.first}`} 
                title={`image of ${contact.first}`}  />
            </div>
            <div id="contactInfo">
                <h1>
                    {contact.first || contact.last ? (
                        <>
                            {contact.first} {contact.last}
                        </>
                    ): (<i>No Name</i>)}
                    <Favorite contact={contact}/>
                </h1>
                {contact.twitter ? ( 
                    <p id="twitterLink">
                        <a href={`https://twitter.com/${contact.twitter}`}>
                            {contact.first}{contact.last}
                        </a>
                    </p>
                 ) : ("") }

                 {contact.notes ? (
                    <p>{contact.notes}</p>
                 ) : ("")}

                 <div id="change">
                    <Form 
                    action="edit"
                    id="edit">
                        <button type="submit">Edit</button>
                    </Form>
                    <Form 
                    action="destory" 
                    id="destory"
                    method="post"
                    /* eslint-disable no-restricted-globals */
                    onSubmit={e => {
                        !(confirm('are you sure you wanna delete this contact ' + contact.first)) && e.preventDefault();
                    }}>
                        <button type="submit">Delete</button>
                    </Form>
                 </div>
            </div>
        </div>
    )
}


function Favorite({ contact }){
    const fetcher = useFetcher();
    let favorite = contact.favorite;
    if(fetcher.formData){
        favorite = fetcher.formData.get('favorite') === 'true';
    }
    return (
        <fetcher.Form method="post">
            <button 
            type="submit"
            name="favorite"
            value={favorite ? 'false' : 'true'}
            id={favorite ? 'favorite' : ''}>
                {favorite ? '★' : '☆'}
            </button>
        </fetcher.Form>
    )
}