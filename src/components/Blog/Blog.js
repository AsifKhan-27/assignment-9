import React from 'react';

const Blog = () => {
    return (
        <div className="mx-4 mt-5 text-start">
            {/* <h2 className="my-4 text-center">Blog</h2> */}
            <h4>What is the purpose of React Router ?</h4>
            <p>
                React Router is a standard library for routing in React. React Router uses a component-based approach to routing. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. It provides different routing components as needed by the application. Route is the conditionally shown component that renders some UI when its path matches the current URL.
            </p>
            <h4>How does Context API work ?</h4>
            <p>
                The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to prop drilling or moving props from grandparent to child to parent, and so on. It provides a way to pass data through the component tree without having to pass props down manually at every level. It provides a way to make particular data available to all components throughout the component tree no matter how deeply nested that component may be.
            </p>
            <h4>What is useRef in React ?</h4>
            <p>
                The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue. The object can persist a value for a full lifetime of the component. 
            </p>

        </div>
    );
};

export default Blog;