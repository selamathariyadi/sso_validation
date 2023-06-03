

export default function ValidateForm(formData) {
  const errors = {}


 
    if (formData.nik.trim() === '') {
        errors.nik = 'Name is required';
      }
  
}
