import { useLoaderData, redirect, Form, useNavigate } from 'react-router-dom';
import { getContact, updateContact } from "../Contacts"

export async function loader({params}){
    const contact = await getContact(params.contactId);
    return contact;
}

export async function action({params, request}){
    const formData = await request.formData();
    const Obj = Object.fromEntries(formData);
    await updateContact(params.contactId, Obj);
    return redirect(`/contacts/${params.contactId}`);
}

export default function EditContact(){
const contact = useLoaderData();
const navigate = useNavigate();
console.log(contact);
    return(
        <Form method="post" id="editContact">
            <p>
                <span>Name</span>

                <input 
                type="text" 
                name="first"
                placeholder="FirstName"
                id='first'
                defaultValue={contact.first}
                 />

                <input 
                type="text" 
                name="last"
                placeholder="LastName"
                defaultValue={contact.last}
                 />
            </p>

            <label>
                <span>Twitter</span>
                <input 
                type="text"
                name="twitter"
                placeholder="Twitter"
                defaultValue={contact.twitter}
                 />
            </label>

            <label>
                <span>AvatarURL</span>
                <input 
                type="text" 
                name="avatarUrl" 
                placeholder="Enter image url"
                defaultValue={contact.avatarUrl}
                />
            </label>

            <label>
                <span>Notes</span>
                <textarea 
                name="notes" 
                rows={8}
                placeholder="Notes"
                id='textarea'
                defaultValue={contact.notes}
                />
            </label>

            <p id="nextStep">
                <button type="submit">Save</button>
                <button 
                type="button" 
                id='back'
                onClick={() => {
                    navigate(-1);
                }}
                >Cancel</button>
            </p>
            
        </Form>
    )
}