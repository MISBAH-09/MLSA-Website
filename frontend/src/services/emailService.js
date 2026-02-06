export const sendContactEmail = async (formData) => {
  try {
    // Check that this URL matches your backend port (5000)
    const response = await fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    return await response.json();
  } catch (error) {
    console.error("Connection Error:", error);
    return { success: false, error };
  }
};