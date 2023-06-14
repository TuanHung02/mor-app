function IconPrev({ onClick }) {
  return (
    <div onClick={onClick}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.8415 6.175L11.6665 5L6.6665 10L11.6665 15L12.8415 13.825L9.02484 10L12.8415 6.175Z"
          fill="#404145"
        />
      </svg>
    </div>
  );
}

export default IconPrev;
