### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

React Router allows developers to build single page applications by using client side routing, meaning it does not have to refresh everytime it receives a new request. 

- What is a single page application?

An SPA is a webapp that dynamically updates data on a page without having to refresh each time it receieves a new request. SPAs are typically developed using client side routing.

- What are some differences between client side and server side routing?

With server side routing you download an entire new webpage whenever you click on a link, whereas with client side routing the webapp downloads, processes and displays new data for you.

- What are two ways of handling redirects with React Router? When would you use each?

One method is using `history.push()` which is used when you need to push a new entry onto the history stack. Another method is `<Redirect>` which is used when you need to navigate to a new location, overriding the current location in the history stack (similar to server-side redirects). 

- What are two different ways to handle page-not-found user experiences using React Router? 

Depending on the React Router version, there are multiple ways to handle page-not-found errors. For the latest version, you can use a generic not found component in your route. You can either keep the path or redirec to another route by changing the URL.

- How do you grab URL parameters from within a component using React Router?

You can implement `useParams` for grabbing URL parameters.

- What is context in React? When would you use it?

Context provides a way to share values like locale preference or UI theme between components without having to explicitly pass a prop through every level of the tree. You should use context when you need to share data between a parent component and a nested child component without any negative effects.

- Describe some differences between class-based components and function
  components in React.

Function components use hooks for changing state and adding effects and have the ability to create custom hooks. Class components use lifecycle methods and declare state and props in the constructor function.

- What are some of the problems that hooks were designed to solve?

Hooks were developed to help to reduce duplicative logic. They allow you to use state and lifecylce features in function components, and pass data and logic by using closures.