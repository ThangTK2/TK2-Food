import Image from "next/image";

type Props = {
  menu: Menu;
  openModal: () => void;
};


const MenuCard = ({ menu, openModal }: Props) => {
  return (
    <div className="flex flex-col rounded-lg shadow-md hover:scale-105
    hover:shadow-lg transition-all duration-200 ease-out cursor-pointer" onClick={openModal}>
      {/*hover:shadow-lg: áp dụng một hiệu ứng bóng lớn (large shadow) cho phần tử. */}
      <Image
        src={menu.image}
        width={360} height={200} alt="menu-img"
        className="h-56 w-full object-scale-down rounded-md"
      />
      <div className="flex flex-col flex-1 p-5">
        <div className="flex justify-between items-center">
          <h2>{menu.title}</h2>
          <span className="text-green-600 font-semibold">${menu.price}</span>
        </div>
      </div>
    </div>
  )
}

export default MenuCard
