const { default: InputForm } = require("@/components/admin/form/InputForm");




function EditForm(){
    <div className="">
        <InputForm name="namaPemesan" >Nama Pemesan</InputForm>
        <InputForm name="emailPemesan" >Email Pemesan</InputForm>
        <InputForm name="namaTamu" >Nama Tamu</InputForm>
    </div>
}

export default EditForm;