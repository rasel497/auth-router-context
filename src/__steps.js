/*
M-56-4:: BASIC Context API Setup!
-----------------------------------
1. context API: share auth state withother componants(accrose the application)
Meaning: auth state mean user login kora ase ki nei thakle kon user ta login kora ase ata ami sobar sthe share korte chai.
2. Without Prop drill jekono jayag thke access korte pari.  Eii jonno amra:: 
Create an UserContex &
ContextProvider (with passed the children) use korsi.

3. set the UserContext in the src> index.js file
4. To consume the context: export the AuthContext from UserContext
5. Now at Header or anywhere else: use useContext hook
6. Now at Header or Home () or anywhere else): use useContext hook to get the info in the context.
*/

/*
Now, Auth Integration Go  to Firebase
-----------------------------------------
1.  use getAuth by passing the app from firebase config
2. create a function named createUser to return createUserWithEmailAndPassword()

3.

*/