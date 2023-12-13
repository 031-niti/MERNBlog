import ReactQill from 'react-quill'
import 'react-quill/dist/quill.snow.css';

const Edtitor = (value, onChange) => {
    const toolbarOptions = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block'],

            [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
            [{ 'direction': 'rtl' }],                         // text direction

            [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'font': [] }],
            [{ 'align': [] }],

            ['clean'],
        ]
    }
    const modules = {
        toolbar: toolbarOptions
    };
    return (
        <div className='w-full max-w-md'>
            <ReactQill value={value} theme='snow' modules={modules} />
        </div>
    )
}

export default Edtitor