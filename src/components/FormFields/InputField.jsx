


const InputField = ({type,name,lableText,setFormData,value}) => {

function handleOnChange(event){
  const name=event.target.name;
  const value=event.target.value;
  setFormData((formData) => ({ ...formData, [name]: value }));
}
  
  return (
    <>
    <div className="bg-inherit flex justify-center flex-col h-auto md:ps-[25px] md:pe-[20px] ps-[20px] pe-[15px] md:m-[20px] my-[20px] border-none ">
            <label htmlFor={name} className="text-[15px] mb-[5px] font-medium">{lableText}</label>
            <input type={type} name={name} value={value}   className="p-[5px] h-[35px] outline-none border-2 border-solid border-[#9c9a9a] rounded font-['Times New Roman', Times, serif] text-[15px] " onChange={handleOnChange}/>
            </div>
    
    </>
  )
}

export default InputField;