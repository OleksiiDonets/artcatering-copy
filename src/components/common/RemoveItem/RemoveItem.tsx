import useUpdateCart from '@/assets/hooks/useUpdateCart';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { RemoveButton, RemoveIcon } from '@/components/common/RemoveItem/RemoveItem.style';

interface IRemoveItem {
  itemKey: string;
};

export const  RemoveItem = ({itemKey}:IRemoveItem) => {
  const { handleRemoveItem } = useUpdateCart(itemKey);
  return(
    <RemoveButton type='button' onClick={handleRemoveItem}>
      <RemoveIcon icon={faTrashCan}/>
    </RemoveButton>
  )
}