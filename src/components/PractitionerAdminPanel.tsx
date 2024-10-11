import { useState, useEffect } from "react";
import { listCognitoUsers } from "../services/cognitoService";

interface CognitoUser {
  Username: string;
  UserStatus: string;
  UserCreateDate: Date;
  Attributes: { Name: string; Value: string }[];
}
const PractitionerAdminPanel = () => {
  const [users, setUsers] = useState<CognitoUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        console.log("Fetching Cognito users...");
        const cognitoUsers = await listCognitoUsers();
        setUsers(cognitoUsers as CognitoUser[]);
      } catch (err) {
        setError("Failed to fetch users. Please try again later.");
        console.error("Detailed error in CognitoUserList:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading users...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
        Cognito Users
      </h2>
      <table className="min-w-full bg-white dark:bg-gray-800">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-left text-sm font-semibold text-gray-900 dark:text-white">
              Username
            </th>
            <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-left text-sm font-semibold text-gray-900 dark:text-white">
              Status
            </th>
            <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-left text-sm font-semibold text-gray-900 dark:text-white">
              Created Date
            </th>
            <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-left text-sm font-semibold text-gray-900 dark:text-white">
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.Username}
              className="hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-sm text-gray-900 dark:text-white">
                {user.Username}
              </td>
              <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-sm text-gray-900 dark:text-white">
                {user.UserStatus}
              </td>
              <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-sm text-gray-900 dark:text-white">
                {user.UserCreateDate.toLocaleDateString()}
              </td>
              <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-sm text-gray-900 dark:text-white">
                {user.Attributes.find((attr) => attr.Name === "email")?.Value ||
                  "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PractitionerAdminPanel;
