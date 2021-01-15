const Header = (title, date, temp) => {
    const head = document.createElement('div')
    const dated = document.createElement('span')
    const titled = document.createElement('h1')
    const temped = document.createElement('span')

    head.appendChild(date)
    head.appendChild(title)
    head.appendChild(temp)

    head.classList.add('header')
    dated.classList.add('date')
    temped.classList.add('temp')

    dated.textContent = date
    titled.textContent = title
    temped.textContent = temp

    return head;
    // TASK 1
    // ---------------------
    // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
    // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
    // The text inside elements will be set using their `textContent` property (NOT `innerText`).
    //
    //  <div class="header">
    //    <span class="date">{ date }</span>
    //    <h1>{ title }</h1>
    //    <span class="temp">{ temp }</span>
    //  </div>
    //
}

const headerAppender = (selector) => {
    const newHeader = Header('Test', '16.6.99', '98°F');
    const target = document.querySelector(selector)
    target.appendChild({ newHeader });
    console.log('success');


    // TASK 2
    // ---------------------
    // Implement this function taking a css selector as its only argument.
    // It should create a header using the Header component above, passing arguments of your choosing.
    // It should append the header to the element in the DOM that matches the given selector.
    //
};



export { Header, headerAppender }