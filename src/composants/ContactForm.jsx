const ContactForm = () => {
  return (
    <form
      name='contact-reunies'
      method='POST'
      data-netlify='true'
      className='max-w-md mx-auto bg-white p-6 rounded-md mb-4'
      style={{ boxShadow: "0 10px 15px rgba(0, 0, 0, 0.2)" }}
    >
      <input type='hidden' name='form-name' value='contact-reunies' />
      <h2 className='text-2xl font-semi-bold mb-4 text-[#bc378c] tracking-wide'>
        Une question?
      </h2>

      <div className='flex space-x-4 mb-4'>
        <div className='flex-1'>
          <input
            type='text'
            name='nom_prenom'
            placeholder='Nom et Prénom'
            className='block w-full border border-[#bc378c] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2'
            required
          />
        </div>
        <div className='flex-1'>
          <input
            type='email'
            name='email'
            placeholder='Adresse mail'
            className='block w-full border border-[#bc378c] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2'
            required
          />
        </div>
      </div>
      <div className='mb-4'>
        <textarea
          name='message'
          placeholder='Message'
          rows='4'
          className='block w-full border border-[#bc378c] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2'
          required
        ></textarea>
      </div>

      <button
        type='submit'
        className='bg-[#fdcd23] text-[#ffffff] font-bold py-2 px-4 rounded-md w-full'
      >
        Envoyer
      </button>
    </form>
  );
};

export default ContactForm;
