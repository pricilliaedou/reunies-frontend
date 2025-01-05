const Succes = () => {
  return (
    <div
      className='max-w-md mx-auto bg-white p-6 rounded-md mb-[120px]'
      style={{ boxShadow: "0 10px 15px rgba(0, 0, 0, 0.2)" }}
    >
      <h2 className='text-2xl font-semibold mb-4 text-[#bc378c] tracking-wide'>
        Merci pour votre message !
      </h2>
      <p className='text-base text-gray-700'>
        Nous avons bien reçu votre message. Nous vous répondrons sous peu.
      </p>
    </div>
  );
};

export default Succes;
