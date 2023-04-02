import "./AppendAd.css";
import {useForm} from '../../../hooks/useForm';
import { useAdContext } from "../../../contexts/AdContext";


export const AppendAd = () => {

  const {onCreateAdSubmit} = useAdContext();

  const {values, onChangeHandler, onSubmit} = useForm({
    title:'',
    category: '',
    imageUrl: '',
    summary:'',
  }, onCreateAdSubmit);

  return (
    <section id="append-ad">
      <form className="form-ad" onSubmit={onSubmit}>
        <input type="text" name="title" placeholder="title" value={values.title} onChange={onChangeHandler} />
        <input type="text" name="category" placeholder="category" value={values.category} onChange={onChangeHandler} />
        <input type="url" name="imageUrl" placeholder="Image URL" value={values.imageUrl} onChange={onChangeHandler} />
        <textarea type="text" name="summary" placeholder="Summary.. " rows="5" value={values.summary} onChange={onChangeHandler} > </textarea>
        <button>Add</button>
      </form>
    </section>
  );
};
