## Dynamic Routing in Next.js

# What it is: Routes that change based on data or parameters.
  Syntax: Use [param] in folder/file name.

 Example:

    app/
    ├─ blog/
    │   ├─ [id]/page.js   → /blog/1, /blog/2

Here [id] is dynamic, can be any value in URL.

## Notes on Dynamic Route Component (User) in Next.js

1. params
    What: Object automatically passed to a page component by Next.js.
    Why: Contains URL parameters for dynamic routes.
    Example meaning: If route is /user/nirmal, then params.user = "nirmal".

2. {params} in function signature
    What: Destructuring of the props object passed to the component.
    Why: Makes it easier to access params directly instead of props.params.

3. Type annotation {params: {user: string}}
    What: TypeScript way to define what params contains.
    Why: Helps type-checking; ensures params.user is always a string.

4. async keywor
    What: Marks a function as asynchronous
    Why: Only needed if you plan to use await for asynchronous operations, e.g., fetching data
    Important: If you are just reading params, async is unnecessary.

5. await param
    What it does: Waits for a Promise to resolve
    Why it’s wrong here: params is a normal object, not a Promise. Using await on it will break the code.

6. const {user} = params
    What: Destructuring assignment to get the user value from params.
    Why: Cleaner and easier than writing params.user every time.
    Meaning: user now contains the dynamic part of the URL.

7. Dynamic routing concept
    [user] in folder/file name = dynamic segment in URL.
    Allows a single file to handle many URLs like /user/nirmal, /user/john, etc.

8. Rendering user in JSX
    What: Shows the dynamic value on the page.
    Why: Makes page content personalized based on the URL.

9. Rules / Best Practices
    Only use async if fetching data.
    Don’t await normal objects like params.
    Always destructure params for clarity.
    Use TypeScript types for safe coding.