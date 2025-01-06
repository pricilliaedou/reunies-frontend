const ContactForm = () => {
  return (
    <form
      action='/succes'
      name='contact-reunies'
      method='POST'
      data-netlify='true'
      data-netlify-honeypot='bot-field'
      className='max-w-md mx-auto bg-white p-6 rounded-md mb-[120px]'
      style={{ boxShadow: "0 10px 15px rgba(0, 0, 0, 0.2)" }}
    >
      <input type='hidden' name='form-name' value='contact-reunies' />
      <input type='hidden' name='bot-field' />
      <h2 className='text-2xl font-semibold mb-4 text-[#bc378c] tracking-wide'>
        Une question?
      </h2>

      <div className='flex space-x-4 mb-4'>
        <div className='flex-1'>
          <input
            type='text'
            name='nom_prenom'
            placeholder='Nom et Prénom'
            className='block w-full border border-[#bc378c] rounded-md shadow-sm p-2'
            required
          />
        </div>
        <div className='flex-1'>
          <input
            type='email'
            name='email'
            placeholder='Adresse mail'
            className='block w-full border border-[#bc378c] rounded-md shadow-sm p-2'
            required
          />
        </div>
      </div>
      <div className='mb-4'>
        <textarea
          name='message'
          placeholder='Message'
          rows='4'
          className='block w-full border border-[#bc378c] rounded-md shadow-sm p-2'
          required
        ></textarea>
      </div>

      <button
        type='submit'
        className='bg-[#fdcd23] hover:bg-[#e6b91f] text-[#ffffff] font-bold py-2 px-4 rounded-md w-full'
      >
        Envoyer
      </button>
    </form>
  );
};

export default ContactForm;
