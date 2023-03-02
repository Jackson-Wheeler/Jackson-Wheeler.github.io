import BlogEntry from './blog_entry.js'

// Global Variables
let Selector = {
    title: 'h2',
    date: 'header span',
    summary: '.blogSummaryContainer p',
    editButton: '.editButton',
    deleteButton: '.deleteButton'
}
let entryTemplate = document.querySelector('template');
let dialog = document.querySelector('dialog');

// Helper Functions
function setTitle(clone, value) {
    clone.querySelector(Selector.title).innerText = value;
}

function setDate(clone, value) {
    clone.querySelector(Selector.date).innerText = value;
}

function setSummary(clone, value) {
    clone.querySelector(Selector.summary).innerText = value;
}

function getEditBtn(clone) {
    return clone.querySelector(Selector.editButton);
}

function getDeleteBtn(clone) {
    return clone.querySelector(Selector.deleteButton);
}

// Main Function
/**
 * 
 * @param {BlogEntry} blogEntry 
 */
function getBlogEntryHTML(blogEntry, idx, editBtnCallback, deleteBtnCallback) {
    let clone = entryTemplate.content.cloneNode(true);

    // Add values to given clone
    setTitle(clone, blogEntry.title);
    setDate(clone, blogEntry.date);
    setSummary(clone, blogEntry.summary);

    // Configure Edit & Delete button onClick listeners
    clone.querySelector(Selector.editButton).setAttribute('index', idx);
    getEditBtn(clone).addEventListener('click', editBtnCallback);
    clone.querySelector(Selector.deleteButton).setAttribute('index', idx);
    getDeleteBtn(clone).addEventListener('click', deleteBtnCallback);

    return clone;
}

export default getBlogEntryHTML