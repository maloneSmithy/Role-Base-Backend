# Role-Base-Backend

this is a test on Authorization

Use thunder Client for the best resuls

try creating an account with roles such as admin or manager or user

creating account: POST:localhost:5500/api/auth/register
use role such as admin

Login to the created account to get the access token

Loging in : POST:localhost:5500/api/auth/login

copy the access token from the login

use the token to acces the protected routes in the request authorization header

token for admin acess all 3 routes
token for manager access manager and user route
token for user only access user route

repeat the process with another role to get differen authorization for different routes

