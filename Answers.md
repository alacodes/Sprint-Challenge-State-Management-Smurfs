1. What problem does the context API help solve?
Context API saves our programs from being too bogged down passing props from parents through children to the desired location(grandchild). 

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Reducers change our state, actions are calls to reducer functions, and all of our application states live in the store. This means we always know where to go when we need to make changes to state by dispatching action. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Without management, state is held in each individual component and can be passed around. Redux and other state management systems allow the devs to move all state into a singe store. The more complex our programs become, the more important it is to reduce the complicated structures and Redux helps us do that. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux thunk is used to change our state asynchronously so we can delay their dispatch. We do this by creating action creators (functions). 

1. What is your favorite state management system you've learned and this sprint? Please explain why!
Context API makes the most sense to me theoretically. I like understanding that using it effectively means saving our programs time and memory as we pass props.