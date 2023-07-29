# Macro Master

This project is composed by two parts:

- Angular: it follows the classical Angular project structure. A service exposes all CRUD operations available to the app.

- Deno server: inside the server-deno folder. Provides endpoints to a generic client and allows to decouple the client app.

# Run the Angular client app

Run npm start for a dev server. Navigate to [angular-server](http://localhost:4200/). The app will automatically reload if you change any of the source files.

# Run Deno server

From the server-deno folder, run `denon start` to start the server. By default, it will listen on PORT `8280`.
If you change it, align the PORT value with the variable used by Angular in the environments folder (within the Angular app scope).

# Server host - Deno Deploy

- The Project Dashboard at Deno Deploy is available at [here](https://dash.deno.com/projects/macromaster)
- The server is available at [macromaster.deno.dev](https://macromaster.deno.dev/)


# Client app host



# Database - Supabase

[Sign-in to Supabase dashboard](https://supabase.com/dashboard/sign-in)