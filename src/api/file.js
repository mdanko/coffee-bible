export const upload = async file => {
  const formData = new FormData();

  formData.append('file', file);
  formData.append('upload_preset', 'shdhndy7');

  const options = {
    method: 'POST',
    body: formData,
  };

  const data = await fetch(
    'https://api.cloudinary.com/v1_1/daepapdic/upload',
    options
  ).then(response => response.json());

  return data.url;
};
