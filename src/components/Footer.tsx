function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-44 mb-6 text-text text-sm flex justify-center items-center absolute bottom-0 left-0 right-0">
      © {currentYear} Amar Omerika. All Rights Reserved.
    </footer>
  );
}

export default Footer;
