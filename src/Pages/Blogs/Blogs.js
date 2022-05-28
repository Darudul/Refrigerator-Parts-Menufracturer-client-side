import React from "react";
import { Link, Outlet } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mt-10 max-w-7xl mx-auto mb-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        <div className="bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title font-bold">
              14.1 How will you improve the performance of a React Application?
            </h2>
            <p className="text-purple-500 font-bold">Answer:</p>
            <p>
              In React applications, we are guaranteed a very fast UI by
              default. However, as an application grows, developers may
              encounter some performance issues.Improve application performance
              is key for developers who are mindful of keeping a user’s
              experience positive to keep them on an app and engaged. React uses
              the concept of a virtual DOM to minimize the performance cost of
              re-rendering a webpage because the actual DOM is expensive to
              manipulate.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title font-bold">
              14.2 What are the different ways to manage a state in a React
              application?
            </h2>
            <p className="text-purple-500 font-bold">Answer:</p>
            <p>
              5 Types of Application State in React help in State Management.
              They are: 1 . Communication State: Communication state forms the
              backbone of your React Native app without you even knowing about
              it. 2. Data State: Data state covers information that your React
              application stores temporarily for various business functions. 3.
              Control State: Contrary to the state mentioned above in a React
              app, the control state does not represent the application’s
              environment. 4. Session State: Session state contains information
              about the user of the application such as user id, permissions,
              passwords, etc. It may also include information on how the
              application should work according to a particular user’s
              preferences. 5. Location State: Unlike Data and Communication
              state, which follow a particular pattern or a shape to store
              information, location state instead stores information in a simple
              string like structure.
            </p>
          </div>
        </div>
        <div className="bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title font-bold">
              14.3 How does prototypical inheritance work?
            </h2>
            <p className="text-purple-500 font-bold">Answer:</p>
            <p>
              The Prototypal Inheritance is a feature in javascript used to add
              methods and properties in objects. It is a method by which an
              object can inherit the properties and methods of another object.
              Traditionally, in order to get and set the [[Prototype]] of an
              object, we use Object. getPrototypeOf and Object.
            </p>
          </div>
        </div>
        <div className="bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title font-bold">
              14.4 Why you do not set the state directly in React. For example,
              if you have const [products, setProducts] = useState([]). Why you
              do not set products = [...] instead, you use the setProducts
            </h2>
            <p className="text-purple-500 font-bold">Answer:</p>
            <p>
              When directly update the state, it does not change this. state
              immediately. Instead, it creates a pending state transition, and
              accessing it after calling this method will only return the
              present value.And also lose control of the state across all
              components. The React useState Hook allows us to track state in a
              function component. State generally refers to data or properties
              that need to be tracking in an application. Because of that we use
              [products, setProducts] = useState([]) state.
            </p>
          </div>
        </div>
        <div className="bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title font-bold">
              14.6 What is a unit test? Why should write unit tests?
            </h2>
            <p className="text-purple-500 font-bold">Answer:</p>
            <p>
              <p>What is a unit test?</p>
              Unit test is a type of software testing where individual units or
              components of a software are tested. The purpose is to validate
              that each unit of the software code performs as expected. Unit
              Testing is done during the development (coding phase) of an
              application by the developers. Unit Tests isolate a section of
              code and verify its correctness. A unit may be an individual
              function, method, procedure, module, or object.
            </p>
            <p>Why should write unit tests?</p>

            <p>
              Unit testing allows software developers to actually think through
              the design of the software and what has to be done before they
              write the code. This can help them to stay focused and can also
              help them to create much better designs.
            </p>
          </div>
        </div>
      </div>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
      </div>
    </div>
  );
};

export default Blogs;
