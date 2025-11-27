import { useCallback, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
// import clsx from 'clsx';
import { snapdom } from '@zumer/snapdom';
import styles from './App.module.less';
import imgBg from './assets/bg.png';
import imgRewards from './assets/rewardbg.png';

function getUiRatio(uiWidth: number = 750) {
  return uiWidth / globalThis?.innerWidth;
}

function getRenderSize(uiSize: number, uiWidth: number = 750) {
  return uiSize / getUiRatio(uiWidth);
}

function App() {
  const shareDomRef = useRef<HTMLDivElement>(null);
  const shareDomImgRef = useRef<HTMLDivElement>(null);
  const generate = useCallback((type: 'bg' | 'img') => {
    const dom = type === 'bg' ? shareDomRef.current! : shareDomImgRef.current!;
    snapdom.download(dom, {
      scale: Math.min(window.devicePixelRatio, 2),
      width: dom.offsetWidth,
      height: dom.offsetHeight,
      embedFonts: true,
      excludeFonts: {
        families: ['Emoji', 'ddin'],
      },
      // dpr: 2,
      // excludeMode: 'remove',
      // exclude: [`.${styles.got}`, `.${styles.getreward}`, `.${styles.bottombg}`, `.${styles.btns}`, '[data-capture="exclude"]'],
      backgroundColor: '#302BC9',
      // cache: 'disabled', // 禁用缓存确保资源正确加载
      // fast: false, // 禁用快速模式,给资源更多加载时间
    });
  }, []);
  const generateUsingBg = useCallback(() => {
    generate('bg');
  }, [generate]);
  const generateUsingImg = useCallback(() => {
    generate('img');
  }, [generate]);

  return <div className={styles.app}>
    <div className={styles.content} ref={shareDomRef}>
      <div className={styles.top}>
        <div className={styles.congratulation}></div>
        <div className={styles.namewrap}>
          <div className={styles.nickname} title="aal001">
            aal001
          </div>
        </div>
        <div className={styles.role}>
          游戏角色：QQ-安卓(android)-胖头陀特莉萨a
        </div>
        <div className={styles.gotreward}>获得和平小店赢锦鲤大奖！</div>
        <div className={styles.rewards}></div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.qrwrap}>
          <div className={styles.qrcode}>
            <QRCodeCanvas value="'http://www.douyu.com/room/share/9263298'" size={getRenderSize(152)} />
          </div>
          <div className={styles.qrtext}>来直播间，赢锦鲤大奖</div>
        </div>
      </div>
    </div>
    <div className={styles.content} ref={shareDomImgRef}>
      <img className={styles.bg} src={imgBg} />
      <div className={styles.top}>
        <div className={styles.congratulation}></div>
        <div className={styles.namewrap}>
          <div className={styles.nickname} title="aal001">
            aal001
          </div>
        </div>
        <div className={styles.role}>
          游戏角色：QQ-安卓(android)-胖头陀特莉萨a
        </div>
        <div className={styles.gotreward}>获得和平小店赢锦鲤大奖！</div>
        <img className={styles.rewardsimg} src={imgRewards} />
      </div>
      <div className={styles.bottom}>
        <div className={styles.qrwrap}>
          <div className={styles.qrcode}>
            <QRCodeCanvas value="'http://www.douyu.com/room/share/9263298'" size={getRenderSize(152)} />
          </div>
          <div className={styles.qrtext}>来直播间，赢锦鲤大奖</div>
        </div>
      </div>
    </div>
    <div className={styles.snapdombg} onClick={generateUsingBg}>snapdom bg</div>
    <div className={styles.snapdomimg} onClick={generateUsingImg}>snapdom img</div>
  </div>;
}

export default App;
