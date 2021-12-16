function createContacts() {
    const contacts = document.createElement("div");
    const header = document.createElement("h2");
    const streetAddress = document.createElement("p");
    const phoneNumber = document.createElement("p");

    streetAddress.innerText = "Our Address : 317 S 2nd St, Floydada, TX 79235";
    phoneNumber.innerText = "Phone : 1-111-222-3333";

    header.innerText = "Contact Information";
    header.classList.add("heading");

    contacts.appendChild(header);
    contacts.appendChild(streetAddress);
    contacts.appendChild(phoneNumber);
    contacts.appendChild(getMapLocator());
    
    contacts.id = "contacts";
    
    contacts.classList.add("contacts-container");
    contacts.classList.add("hide");

    return contacts;
}

function getMapLocator() {
    const iframeElement = document.createElement("iframe");
    iframeElement.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.3946102464533!2d-101.34305638479914!3d33.98239658062497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ffd5557ae868b7%3A0x5a920978c3ddfaaa!2s317%20S%202nd%20St%2C%20Floydada%2C%20TX%2079235!5e0!3m2!1sen!2sus!4v1639685504687!5m2!1sen!2sus";
    iframeElement.classList.add("map-container");

    return iframeElement;
}

export {createContacts};