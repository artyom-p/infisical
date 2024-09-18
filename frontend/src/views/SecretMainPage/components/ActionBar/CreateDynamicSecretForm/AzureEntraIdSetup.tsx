import {
    Button,
} from "@app/components/v2";

type Props = {
    onCompleted: () => void;
    onCancel: () => void;
};

const MSFT_ENTRA_ID_APPLICATION_ID = "9805c35f-88d4-4625-9daf-66f741e4129c"

export const AzureEntraIdSetup = ({
    onCompleted,
    onCancel,
}: Props) => {

    return (
        <div>
            <div>
                <div>
                    <div className="mb-4 mt-4 pb-2 pl-1 font-medium text-mineshaft-200">
                        Azure Entra ID Integration Guide
                    </div>
                    <div className="mb-4 mt-4 border-b border-mineshaft-500 pb-2 pl-1 font-medium text-mineshaft-200">
                        App Installation
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center space-x-2">
                            Step 1: Click install app to install the Infisical Azure Entra ID App.
                            <br />
                            Step 2: Choose an account with admin access to Entra Id.
                            <br />
                            Step 3: Allow Infisical persmissions to read and write all users full profiles.
                            <br />
                            Step 4: Copy Tenant ID after installation and paste it in the next step.
                        </div>
                    </div>
                </div>

                <div>
                    <div className="mb-4 mt-4 border-b border-mineshaft-500 pb-2 pl-1 font-medium text-mineshaft-200">
                        Role Configuration
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center space-x-2">
                            Step 1: Open the Azure Entra Id dashboard.
                            <br />
                            Step 2: Go to Roles and admins {">"} User Administrator Role {">"} + Add Assignments.
                            <br />
                            Step 3: Search Infisical {">"} Click on Infisical Enterprise App {">"} Click Add.
                            <br />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 flex items-center space-x-4">
                <a href={`https://login.microsoftonline.com/common/adminconsent?client_id=${MSFT_ENTRA_ID_APPLICATION_ID}&redirect_uri=${window.location.origin}/integrations/azure-entra-id/callback`} target="_blank" rel="noreferrer">
                    <Button type="submit">
                        Install App
                    </Button>
                </a>
                <Button type="submit" onClick={onCompleted}>
                    Next
                </Button>
                <Button variant="outline_bg" onClick={onCancel}>
                    Cancel
                </Button>
            </div>
        </div>
    );
};
