

export default async function userRegister(name :string, email : string, password : string, role : string) {
      const response = await fetch("https://localhost:3500/api/v1/auth/register", {
        method: "POST",
        mode:"cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          role: role
        }),
      });
      
  
      if (!response.ok) {
        throw new Error("Failed to register");
      }
  
      return await response.json();
  }
  