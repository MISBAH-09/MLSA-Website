
export const sendContactEmail = async (formData) => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    console.log('Email API response status:', response.status);

    return await response.json();
  } catch (error) {
    console.error('Email error:', error);
    return { success: false };
  }
};
