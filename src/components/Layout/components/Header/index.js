

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
// import Tippy from '@tippyjs/react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';

import styles from "./Header.module.scss"
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccoutItem from '~/components/AccountItem';
import RecentlySearch from '~/components/RecentlySearch';

const cx = classNames.bind(styles)

function Header() {

  const [searchResult, setSearchResult] = useState([])


  return (
    <header className={cx('wrapper')}>

      <div className={cx('inner')}>

        <div className={cx('logo')}>
          <img
            src={images.logo}
            alt='logo' />
        </div>

        <Tippy
          interactive={true}
          // visible={searchResult}
          visible={true}
          onClickOutside={() => { setSearchResult(false) }}
          render={attrs => (
            <PopperWrapper className={cx('popper-wrapper')}>
              <div
                className={cx('search-result')}
                tabIndex="-1"
                {...attrs}
              >

                <RecentlySearch />
                <AccoutItem />

              </div>
            </PopperWrapper>
          )}
        >
          <div className={cx('search')}>

            <input
              onFocus={searchResult ? () => setSearchResult(false) : () => setSearchResult(true)}
              placeholder='Tìm kiếm'
              spellCheck={false}
            />

            <button className={cx('clear')}>
              <img className={cx('clear-icon')} src={images.clearIconSolid}></img>
              <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
            </button>

            <span className={cx('spliter')}></span>

            <button className={cx('search-btn')}>
              <img className={cx('search-btn-icon')} src={images.searchIcon}></img>
            </button>

          </div>

        </Tippy>


        <div className={cx('actions')}>

          <button className={cx('upload')}>
            <img className={cx('upload-icon')} src={images.plusIcon} />
            <p>Tải lên</p>
          </button>


          <button className={cx('send')}>
            <img className={cx('send-icon')} src={images.sendIcon} />

          </button>

          <button className={cx('inbox')}>

            <img className={cx('inbox-icon')} src={images.inBoxIcon} />
            <div className={cx('inbox-counter')}>10</div>
            <div className={cx('inbox-desc')}>Hộp thư</div>
          </button>

          <button className={cx('avt')} />

        </div>

      </div>

    </header>
  );
}

export default Header;