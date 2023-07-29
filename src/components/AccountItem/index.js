
import classNames from 'classnames/bind';

import styles from "./AccountItem.module.scss"
import images from '~/assets/images';

const cx = classNames.bind(styles)

function AccoutItem() {
  return (
    <ul className={cx('account-search')}>

      <div className={cx('account-search-title')}>Bạn có thể thích</div>

      <li className={cx('account-search-item')}>
        <img className={cx('account-search-item-icon')} src={images.fireIcon} />
        <p>aaaaa</p>
      </li>

    </ul>
  );
}

export default AccoutItem;