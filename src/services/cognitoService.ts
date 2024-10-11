// src/services/cognitoService.ts

import { CognitoIdentityProviderClient, ListUsersCommand } from "@aws-sdk/client-cognito-identity-provider";
import { fetchAuthSession } from 'aws-amplify/auth';

const AWS_REGION = import.meta.env.VITE_AWS_REGION;
const COGNITO_USER_POOL_ID = import.meta.env.VITE_COGNITO_USER_POOL_ID;

export async function listCognitoUsers() {
  try {
    // Get the current authenticated user's credentials
    const { credentials } = await fetchAuthSession();

    if (!credentials) {
      throw new Error("No credentials available");
    }

    // Create a Cognito Identity Provider client
    const client = new CognitoIdentityProviderClient({
      region: AWS_REGION,
      credentials: {
        accessKeyId: credentials.accessKeyId,
        secretAccessKey: credentials.secretAccessKey,
        sessionToken: credentials.sessionToken
      }
    });

    // Set up the command to list users
    const command = new ListUsersCommand({
      UserPoolId: COGNITO_USER_POOL_ID,
      Limit: 60, // Adjust as needed
    });

    // Execute the command
    const response = await client.send(command);

    // Process the response
    console.log("Users:", response.Users);
    return response.Users;
  } catch (error) {
    console.error("Error listing Cognito users:", error);
    throw error;
  }
}
