import { Form, redirect, useNavigation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';
//const newsletterUrl = 'https://jsonplaceholder.typicode.com/posts';


export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await axios.post(newsletterUrl, data);
    console.log(response);
    //toast.success(response.data.name + ' sikeresen felíratkoztál');
    toast.success(response.data.msg);
    return redirect('/');
  }
  catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
}

const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Form className="form" method="POST">
      <h4>Hírlevelünk</h4>

      <div className="form-row">
        <label htmlFor="name" className="form-label">Kereszt név:</label>
        <input type="text" name="name" id="name" className="form-input" required />
      </div>

      <div className="form-row">
        <label htmlFor="lastName" className="form-label">Vezeték név:</label>
        <input type="text" name="lastName" id="lastName" className="form-input" required />
      </div>

      <div className="form-row">
        <label htmlFor="email" className="form-label">Email:</label>
        <input type="email" name="email" id="email" className="form-input" required />
      </div>
      <button
        type="submit"
        className="btn btn-block"
        disabled={isSubmitting}>
        {isSubmitting ? 'Feldolgozás': 'Felíratkozom'}
      </button>
    </Form>
  )
}
export default Newsletter;