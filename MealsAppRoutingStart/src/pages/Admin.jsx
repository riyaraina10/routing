import React from "react";

function Admin() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "calc(100vh - 60px)",
            }}
        >
            <div>
                <h1>Authorised Access only</h1>
                <p>This is the Admin page of the app.</p>
            </div>
        </div>
    );
}

export default Admin;
