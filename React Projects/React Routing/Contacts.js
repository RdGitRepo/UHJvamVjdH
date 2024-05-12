import localforage from "localforage";
import { matchSorter } from 'match-sorter';
import sortBy from "sort-by";

localforage.removeItem('contactsId')
localforage.removeItem('contacts')


export async function getContacts(query){
    await fakeNetwork(`getContact(${query})`);
    let contacts = await localforage.getItem('keyContacts');
    if(!contacts){
        contacts = [];
    }
    if(query){
        contacts = matchSorter(contacts, query, {keys: ['first' , 'last']});
    }
    return contacts.sort(sortBy('last', 'createdAt'));
}

export async function getContact(id){
    await fakeNetwork(`getContact(${id})`);
    const contacts = await localforage.getItem('keyContacts');
    const contact = contacts.find(con => con.id === id);
    return contact ?? null;
}

export async function createContact(){
    await fakeNetwork();
    const id = Math.random().toString(36).substring(2, 9);
    const initializeContact = {id, createdAt: Date.now()};
    const contacts = await getContacts();
    contacts.unshift(initializeContact);
    await set(contacts);
    return initializeContact;
}

export async function updateContact(id, Obj){
    await fakeNetwork();
    let contacts = await localforage.getItem('keyContacts');
    let contact = contacts.find(con => con.id === id);
    Object.assign(contact, Obj);
    await set(contacts);
    return contact;
}

export async function deleteContact(id){
    let contacts = await localforage.getItem('keyContacts');
    const index = contacts.findIndex(con => con.id === id);
    if(index > -1){
        contacts.splice(index, 1);
        await set(contacts);
        return true;
    }
    return false;
}

async function set(contacts){
    await localforage.setItem('keyContacts', contacts);
}

let catche = {};

async function fakeNetwork(key){
    if(!key){
        catche = {};
    }

    if(catche[key]){
        return;
    }

    catche[key] = true;
    return new Promise(res => {
        setTimeout(res, Math.random() * 800)
    })
}