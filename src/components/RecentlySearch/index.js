import classNames from 'classnames/bind';

import styles from "./RecentlySearch.module.scss"
import images from '~/assets/images';

const cx = classNames.bind(styles)


function RecentlySearch() {
  return (
    <ul className={cx('recently-search')}>
      <div className={cx('recently-search-title')}>Tìm kiếm gần đây</div>
      <li className={cx('recently-search-item')}>

        <div className={cx('recently-search-item-left')}>
          <img className={cx('recently-search-item-icon')} src={images.clockIcon} />
          <p>aaaaa</p>
        </div>
        <img className={cx('recently-search-item-clear-icon')} src={images.xMarkIcon} />
      </li>
    </ul>
  );
}

export default RecentlySearch;