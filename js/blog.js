// @ts-uncheck
import BlogEntry from './blog_entry.js'
import getBlogEntryHTML from './blog_entry_html_template.js'

// Constants
const EDIT = 'Edit';
const ADD = 'Add';
const writeTypeAttr = 'writeType';
const entryIdxAttr = 'entryIdx'

// Page Elements
const blogPostContainer = document.getElementById('blogPostsContainer');
const addButton = document.getElementById('add');
const dialog = document.querySelector('dialog');

// Initialize array & display blog entries
let obj = new BlogEntry("예수님은 누구입니까?", 'March 2, 2023', '성경에서 예수님은 생깁니다. 이 분은 누구입니까? 사실은 이 분께서 우리의 구주입니다 :D');
let obj2 = new BlogEntry("Default Blog Title", 'March 2, 2001', 'This is a very good blog');
const blogPostStorage = 'blog-posts'

// STARTING CODE
let blogEntriesList = JSON.parse(localStorage.getItem(blogPostStorage)) || [obj, obj2];

displayBlogs();

// Event Listeners
/** Add Blog Entry button */
addButton.addEventListener('click', openAddDialogue);

/** Closing the Dialogue*/
dialog.addEventListener('close', closeDialogue);


/**
 * Display blogs onto the page
 */
function displayBlogs() {
    // Clear list
    removeAllChildren(blogPostContainer);

    // Add Each BlogEntry obj to DOM
    for(let i in blogEntriesList) {
        let blogEntry = blogEntriesList[i];

        // Configure Callback function for edit and delete buttons
        function editBtnCallback() {
            openEditDialogue(blogEntry, i);
        }
        function deleteBtnCallback()  { 
            deleteBlogEntry(i); 
        }
        
        // Get HTML for blogentry
        let blogEntryHtml = getBlogEntryHTML(blogEntry, i, editBtnCallback, deleteBtnCallback);
 
        // update the DOM
        blogPostContainer.appendChild(blogEntryHtml);
    }
}

/**
 * Opens the dialogue for adding a blog entry
 */
function openAddDialogue() {
    dialog.setAttribute(writeTypeAttr,ADD);
    dialog.setAttribute(entryIdxAttr,-1);
    dialog.showModal();
}

/** 
 * Logic for when the dialogue is closed
 */
function closeDialogue() {
    // If dialogue cancelled -> do nothing
    if(dialog.returnValue !== 'save') {
        clearDialogue(dialog);
        return;
    }
    // Different logic for adding blog entry vs. editing one
    let writeType = dialog.getAttribute(writeTypeAttr);
    if (writeType === ADD) {
        addBlog(dialog);
    } else {
        let entryToEditIdx = dialog.getAttribute(entryIdxAttr);
        editBlogEntry(entryToEditIdx, dialog);
    }

    clearDialogue(dialog);
}

/**
 * Add blog to blogEntriesList with data inputted/stored in passed in dialogBox
 */
function addBlog(dialogBox) {
    let title = dialogBox.querySelector('#title').value;
    let date = dialogBox.querySelector('#date').value;
    let summary = dialogBox.querySelector('#summary').value;
    let newBlog = new BlogEntry(title, date, summary);

    blogEntriesList.push(newBlog);
    localStorage.setItem(blogPostStorage, JSON.stringify(blogEntriesList));

    displayBlogs();
}

/**
 * Edit existing blogEntry with information stored in dialogBox
 */
function editBlogEntry(index, dialogBox) {
    // Edit entry at given index
    let blogEntry = blogEntriesList[index];
    blogEntry.title = dialogBox.querySelector('#title').value;
    blogEntry.date = dialogBox.querySelector('#date').value;
    blogEntry.summary = dialogBox.querySelector('#summary').value;

    localStorage.setItem(blogPostStorage, JSON.stringify(blogEntriesList));

    // update screen
    displayBlogs();
}

/** 
 * Open dialogue box in edit mode
*/
function openEditDialogue(blogEntry, blogEntryIdx) {
    // Save information into dialogue element's attributes
    let dialog = document.querySelector('dialog');
    dialog.setAttribute(writeTypeAttr,EDIT);
    dialog.setAttribute(entryIdxAttr,blogEntryIdx);

    // Fill Dialogue w/ blog entry's current values
    dialog.querySelector('#title').value = blogEntry.title;
    dialog.querySelector('#date').value = blogEntry.date;
    dialog.querySelector('#summary').value = blogEntry.summary;

    // update screen
    dialog.showModal();
}

/**
 * Delete blog entry from blogEntriesList 
 */
function deleteBlogEntry(index) {
    blogEntriesList.splice(index, 1);
    localStorage.setItem(blogPostStorage, JSON.stringify(blogEntriesList));
    
    displayBlogs();
}


// Helper Functions
function clearDialogue(dialogueElem) {
    dialogueElem.querySelector('#title').value = '';
    dialogueElem.querySelector('#date').value = '';
    dialogueElem.querySelector('#summary').value = '';
}

function removeAllChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}





