import "./AppendAd.css";
import {useForm} from '../../../hooks/useForm';

export const AppendAd = ({
  onSubmitAppendAd,
}) => {

  const {formValues, onChangeHandler, onSubmit} = useForm({
    title:'',
    category: '',
    imageUrl: '',
    summary:'',
  }, onSubmitAppendAd);

  return (
    <section id="append-ad">
      <form className="form-ad" onSubmit={onSubmit}>
        <input type="text" name="title" placeholder="title" value={formValues.title} onChange={onChangeHandler} />
        <input type="text" name="category" placeholder="category" value={formValues.category} onChange={onChangeHandler} />
        <input type="url" name="imageUrl" placeholder="Image URL" value={formValues.imageUrl} onChange={onChangeHandler} />
        <textarea type="text" name="summary" placeholder="Summary.. " rows="5" value={formValues.summary} onChange={onChangeHandler} > </textarea>
        <button>Add</button>
      </form>
    </section>
  );
};
