import CustomButton from "../custom-button/CustomButton";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div>Edit Offer Details</div>
     <CustomButton text={'Add Custom hour'} />
    </div>
  );
};

export default Header;
