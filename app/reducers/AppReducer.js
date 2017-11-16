import {
  FILTER_TEXT_CHANGED,
  FILTER_CATEGORY_SELECTED,
  SET_PAGE
} from '../actions/types'

// Supongamos que esto recibimos del API en forma JSON
const BOOKS = [
    {
      id: "9781593275846",
      title: "Eloquent JavaScript, Second Edition",
      subtitle: "A Modern Introduction to Programming",
      author: "Marijn Haverbeke",
      published: "2014-12-14T00:00:00.000Z",
      publisher: "No Starch Press",
      pages: 472,
      description: "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
      website: "http://eloquentjavascript.net/",
      img: "http://eloquentjavascript.net/img/cover.png",
      categories: [ 1,2]
    },
    {
      id: "9781449331818",
      title: "Learning JavaScript Design Patterns",
      subtitle: "A JavaScript and jQuery Developer's Guide",
      author: "Addy Osmani",
      published: "2012-07-01T00:00:00.000Z",
      publisher: "O'Reilly Media",
      pages: 254,
      description: "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
      website: "http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/",
      img: "http://eloquentjavascript.net/img/cover.png",
      categories: [3.4]

    },
    {
      id: "9781449365035",
      title: "Speaking JavaScript",
      subtitle: "An In-Depth Guide for Programmers",
      author: "Axel Rauschmayer",
      published: "2014-02-01T00:00:00.000Z",
      publisher: "O'Reilly Media",
      pages: 460,
      description: "Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
      website: "http://speakingjs.com/",
      img: "http://eloquentjavascript.net/img/cover.png",
      categories: [5,6]

    },
    {
      id: "9781491950296",
      title: "Programming JavaScript Applications",
      subtitle: "Robust Web Architecture with Node, HTML5, and Modern JS Libraries",
      author: "Eric Elliott",
      published: "2014-07-01T00:00:00.000Z",
      publisher: "O'Reilly Media",
      pages: 254,
      description: "Take advantage of JavaScript's power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that's easier-yes, easier-to work with as your code base grows.",
      website: "http://chimera.labs.oreilly.com/books/1234000000262/index.html",
      img: "http://eloquentjavascript.net/img/cover.png",
      categories:[1,2]

    },
    {
      id: "9781593277574",
      title: "Understanding ECMAScript 6",
      subtitle: "The Definitive Guide for JavaScript Developers",
      author: "Nicholas C. Zakas",
      published: "2016-09-03T00:00:00.000Z",
      publisher: "No Starch Press",
      pages: 352,
      description: "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
      website: "https://leanpub.com/understandinges6/read",
      img: "http://eloquentjavascript.net/img/cover.png",
      categories:[3,4]

    },
    {
      id: "9781491904244",
      title: "You Don't Know JS",
      subtitle: "ES6 & Beyond",
      author: "Kyle Simpson",
      published: "2015-12-27T00:00:00.000Z",
      publisher: "O'Reilly Media",
      pages: 278,
      description: "No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. As part of the You Don’t Know JS series, this compact guide focuses on new features available in ECMAScript 6 (ES6), the latest version of the standard upon which JavaScript is built.",
      website: "https://github.com/getify/You-Dont-Know-JS/tree/master/es6%20&%20beyond",
      img: "http://eloquentjavascript.net/img/cover.png",
      categories:[5,6]

    },
    {
      id: "9781449325862",
      title: "Git Pocket Guide",
      subtitle: "A Working Introduction",
      author: "Richard E. Silverman",
      published: "2013-08-02T00:00:00.000Z",
      publisher: "O'Reilly Media",
      pages: 234,
      description: "This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git experience.",
      website: "http://chimera.labs.oreilly.com/books/1230000000561/index.html",
      img: "http://eloquentjavascript.net/img/cover.png",
      categories:[2,3]
    },
    {
      id: "9781449337711",
      title: "Designing Evolvable Web APIs with ASP.NET",
      subtitle: "Harnessing the Power of the Web",
      author: "Glenn Block, et al.",
      published: "2014-04-07T00:00:00.000Z",
      publisher: "O'Reilly Media",
      pages: 538,
      description: "Design and build Web APIs for a broad range of clients—including browsers and mobile devices—that can adapt to change over time. This practical, hands-on guide takes you through the theory and tools you need to build evolvable HTTP services with Microsoft’s ASP.NET Web API framework. In the process, you’ll learn how design and implement a real-world Web API.",
      website: "http://chimera.labs.oreilly.com/books/1234000001708/index.html",
      img: "http://eloquentjavascript.net/img/cover.png",
      categories:[4,5]

    }
]

const INITIAL_STATE = {
  page: 1,
  originalBooks: BOOKS, // lista original de productos
  categories :[
    {
      id: 1,
      url: 'https://image.freepik.com/free-photo/web-design-concepts-with-blurred-background_1134-82.jpg',
      title: 'Design',
      width: '40%',
    },
    {
      id: 2,
      url: 'https://tr2.cbsistatic.com/hub/i/r/2017/10/16/eea1415d-b05a-46ba-aba7-7adc472f6a1d/resize/770x/cf16b9e0914c54f918ca8f3eacf691fc/database.jpg',
      title: 'Programing',
      width: '30%',
    },
    {
      id: 3,
      url: 'https://tr2.cbsistatic.com/hub/i/r/2016/02/23/081e5075-5499-4f93-afbe-22830aacd56a/resize/770x/b55caf346264ae7134deb0d3b7859bfc/ai.jpg',
      title: 'Artificial Intelligence',
      width: '30%',
    },
    {
      id: 4,
      url: 'https://www.ayokasystems.com/wp-content/uploads/database.jpg',
      title: 'Data Base',
      width: '30%'
    },
    {
      id: 5,
      url: 'http://statistica.io/wordpress/wp-content/uploads/ndaa-analytics.jpg',
      title: 'Data Science',
      width: '30%'
    },
    {
      id: 6,
      url: 'https://getcrm.com/uploads/machine_learning.jpg',
      title: 'Machine Learning',
      width: '30%'
    }
  ],
  categorieSelected: null,
  filteredBooksCategory:[],
  filterText: '', //texto que ingresa el usuario para buscar
  filteredSearchBooks : []//inicialmente no hay ningun filtro
}

//Este es nuestro AppReducer
export default (state = INITIAL_STATE, action) => {
  let newState = {}

  switch (action.type) {
    case FILTER_TEXT_CHANGED:
      newState = {
        ...state,
        filterText: action.payload
      }
      break;
    case FILTER_CATEGORY_SELECTED:
      newState = {
        ...state,
        categorySelected: action.payload
      }
      break;
    case SET_PAGE:
      newState = {
        ...state,
        page: action.payload
      }
      break;
    default:
      return state
  }

  if(action.type === FILTER_TEXT_CHANGED){
    console.log("AppReducer-filterTextChanged: ",action.payload)

    const filteredSearchBooks = state.filteredBooksCategory.filter((book, i)=>{
      if(book.title.toLowerCase().indexOf(action.payload.trim().toLowerCase())!=-1 || book.author.toLowerCase().indexOf(action.payload.trim().toLowerCase())!=-1){
        return book;
      }
    });
    console.log("filteredBooks: ",filteredSearchBooks)
    newState = {
      ...newState,
      filteredSearchBooks
    }
  }

  if(action.type === FILTER_CATEGORY_SELECTED){
    console.log("AppReducer filter Category: ",action.payload);
    const filteredBooksCategory = state.originalBooks.filter((book, i)=>{
      if(book.categories.indexOf(parseInt(action.payload))!= -1){
        return book;
      }
    });

     newState = {
      ...newState,
      filteredBooksCategory,
      filteredSearchBooks:filteredBooksCategory
    }

  }

  if(action.type === SET_PAGE){
    console.log("AppReducer- cambiando de componente")
  }

  console.log("newState: ",newState);
  return newState;
}
