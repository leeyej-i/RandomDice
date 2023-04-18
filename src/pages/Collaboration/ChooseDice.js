import React, { useState } from 'react'
import { increaseCount, decreaseCount, changeNum } from './../../module/reducer/counter'
import { useDispatch, useSelector } from 'react-redux'
import diceData from '../Dice/diceData'
const ChooseDice = (props) => {
    const index = Number(props.index);
    const [open, setOpen] = useState(false)
    let dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.counters[index])
    const diceDispatch = (index, num) => {
        dispatch(changeNum({ index, num }))
    }
    return (
        <div>
            <div>
                <button style={{ width: "100%", display: "block" }} onClick={() => setOpen(true)}><img style={{ width: "100%", display: "block" }} src={diceData[2][counter.num - 1]}></img></button>

            </div>
            {open ?
                <div className='dice-set'>
                    <div className='dice-row'>
                        <button onClick={() => {
                            diceDispatch(index, 1)
                            setOpen(false)
                        }}>
                            <img src='https://i.namu.wiki/i/WgHq4K1ZExJ2KnM297iQz26XoiCzwkpZUSy0pJx-kY15fw5Jep2q131-aulfT8ToL5mh6JegRAxDjG5OEjmv8g.webp'></img>
                        </button>
                        <button onClick={() => {
                            diceDispatch(index, 2)
                            setOpen(false)
                        }}>
                            <img src='https://i.namu.wiki/i/1-bJLG5SU2cJFWsQ2hnpFbSeNiHRsACw7DhTGLTE-2MWdhnppJrLgBpQKpQ3N5DwDz4iibzGlR7MAKE0wbvglg.webp'></img>
                        </button>
                        <button onClick={() => {
                            diceDispatch(index, 3)
                            setOpen(false)
                        }}>
                            <img src='https://i.namu.wiki/i/3OcUlYi6t-7lIngl6nc3sa3Y0NxHkNZ7NOh-0Fn8v8_XE9rAruPPDbDZBRtVrDFt0NDlTdtuBybgphoD8l8dkw.webp'></img>
                        </button>
                        <button onClick={() => {
                            diceDispatch(index, 4)
                            setOpen(false)
                        }}>
                            <img src='https://i.namu.wiki/i/fzvIZ4DQ_GgzkFfIrGQ0OdWQ9FZi1ghxghvUnJW3u-lCp1ha4qTJEqqVMlveVGloiffM5Hr2i4EHkXuuWPH_hQ.webp'></img>
                        </button>
                        <button onClick={() => {
                            diceDispatch(index, 5)
                            setOpen(false)
                        }}>
                            <img src='https://i.namu.wiki/i/YCwgZ39eGqgxlz82sxv7iI7wfgwzzv4YtB7QeNiRoqCd0LXEViB0zQGOPK2Is-b7ZGG6xQD7CfIXEF14ZtdkEg.webp'></img>
                        </button>
                        <button onClick={() => {
                            diceDispatch(index, 6)
                            setOpen(false)
                        }}>
                            <img src='https://i.namu.wiki/i/ScBAKWQOt_baDvepNdjZ1CppVSG0RInUeZRUsX1WOfNfLD_B7aSeyul8SeuMkBBQ6bz3cGRug3rucHQV-sB7aQ.webp'></img>
                        </button>
                        <button onClick={() => {
                            diceDispatch(index, 7)
                            setOpen(false)
                        }}>
                            <img src='https://i.namu.wiki/i/V-CDNeeD225R8mw7LHOBPo7h7JxGiple5Ame_KMeZ5DnNnnxvZzlneeaw861Mt0EwZX9mCttjaytuOIP1panTQ.webp'></img>
                        </button>
                        <button onClick={() => {
                            diceDispatch(index, 8)
                            setOpen(false)
                        }}>
                            <img src='https://i.namu.wiki/i/upnWEMYgnTcudL-acTJ0KHaEqzjyam-0drGWBQBIEYyJ57Ftd8qKBbYVIb-WZexdk31O9BE1OZ9NR9KagRegJA.webp'></img>
                        </button>
                    </div>
                    <div className='dice-row'>
                        <button onClick={() => {
                            diceDispatch(index, 9)
                            setOpen(false)
                        }}>
                            <img src='https://i.namu.wiki/i/uOfUETJZj-oskByWpgZzxMjaW15V1LRLL5wl4ZTqANcLqGPu0ZheGFK8g3iLqU_HKHaqi3Q_9p7dhoAxtpJH5w.webp'></img>
                        </button>
                        <button onClick={() => {
                            diceDispatch(index, 10)
                            setOpen(false)
                        }}>
                            <img src='https://i.namu.wiki/i/Qd0jffzVefwZxWQiDsYRgwiVTDgTdy0M_JmnG3u8Bc7seJbPi-86jdhTZBc7wrUZz_nhKBMng0LPfvQhw59fXg.webp'></img>
                        </button>
                        <button onClick={() => {
                            diceDispatch(index, 11)
                            setOpen(false)
                        }}>
                            <img src='https://i.namu.wiki/i/Ssv2blQZwc3kpaos89eaquOsxHJZl3c565vNOeoKi686oEQ3a6KwYHnXRJa8zwwGW3ZsGC0eHDsxI0L6lMqA4g.webp'></img>
                        </button>
                        <button onClick={() => {
                            diceDispatch(index, 12)
                            setOpen(false)
                        }}>
                            <img src='https://i.namu.wiki/i/TZ0-K1MdzxpopzVIMtxCTquzfVye4yHjKv-nyp1fMnDAfl3sLz0YFwWc3h2EqcXFegXbJI11aSPdaSt93Aa5dg.webp'></img>
                        </button>
                        <button onClick={() => {
                            diceDispatch(index, 13)
                            setOpen(false)
                        }}>
                            <img src='https://i.namu.wiki/i/4lzdCoiWlq9CQGfuj3U_20bRcWko8EhG0p7elkMCUW0hz02ZhtgA9GhdMiQq4Zcp4SZB-J4npYPCIDDUgNmvUA.webp'></img>
                        </button>
                        <button onClick={() => {
                            diceDispatch(index, 14)
                            setOpen(false)
                        }}>
                            <img src='https://i.namu.wiki/i/J-fQMX8g9d39aEPYaLH0y0SwwNU2iY8j_jUE8ySISukVAS2nG7ixm4W7bthhosyGn7smrSw7GckOu24sK4TnAA.webp'></img>
                        </button>
                        <button onClick={() => {
                            diceDispatch(index, 15)
                            setOpen(false)
                        }}>
                            <img src='https://i.namu.wiki/i/cmTwSky1cKIxNahczG9k43U83B9uxQ8c3YkggG13Xz5E-pWDkiC2TFQrpAz4-zI5ZlgaqSPDQlV0BDORP0SA-Q.webp'></img>
                        </button>
                        <button onClick={() => {
                            diceDispatch(index, 16)
                            setOpen(false)
                        }}>
                            <img src='https://i.namu.wiki/i/IluJCj3naGnVhTkFBuTHNtVuDsbTNIh9Ksm0w0rp2Ap15fSOpI4MC2RRscJy36LN1J7kYa_7LgZbXKU2r4c0jQ.webp'></img>
                        </button>
                    </div>
                    <div className='dice-row'>
                        <button onClick={() => {
                            diceDispatch(index, 17)
                            setOpen(false)
                        }}>
                            <img src='https://i.namu.wiki/i/Y5Kl3Q1LDzRWAN09bt_ko8PATy-azfkVZnzz0D-ShbppLhzJMvqrylrBvJ79k2AGmjoqoz3S10cxMzUO7v82MQ.webp'></img>
                        </button>
                        <button onClick={() => {
                            diceDispatch(index, 18)
                            setOpen(false)
                        }}>
                            <img src='https://i.namu.wiki/i/J1YXUpdxycpsufNA0wBZy3fP8mlkfzNxJeE8K87EXfKhobtZDyay-rbe7v1OAR-I9SJq0LVDpYe3QLVm_XkZTQ.webp'></img>
                        </button>
                        <button onClick={() => {
                            diceDispatch(index, 19)
                            setOpen(false)
                        }}>
                            <img src='https://i.namu.wiki/i/iKdYEFaxTA5RjayOFiKlZw_d_Y0oNphVahOo_ahv2eYS21xRahWiDv2AKGR17VzPx6UZ_5413RqR3iVTCc4Dog.webp'></img>
                        </button>
                        <button onClick={() => {
                            diceDispatch(index, 20)
                            setOpen(false)
                        }}>
                            <img src='https://i.namu.wiki/i/d4tOHO9mN2SV7_Rha3JBsjyLCi8LLcPWxSsNQszUYOeriG_OkFZK98hJ8qx-CMu37Ll4jaDsgpokjexmfQ2Htw.webp'></img>
                        </button>
                        <button onClick={() => {
                            diceDispatch(index, 21)
                            setOpen(false)
                        }}>
                            <img src='https://i.namu.wiki/i/IrI_MOTQNLF71lXfapt0OgZO_55_l86QRs-FlLOtaK9wKu6C0dovsAEZ3FvRjVaddnIT1GDERkdte3bvPBe9Xw.webp'></img>
                        </button>
                        <button onClick={() => {
                            diceDispatch(index, 22)
                            setOpen(false)
                        }}>
                            <img src='https://i.namu.wiki/i/MD1Zq6t--HkcbfGMDn3lET9I6TEAu80RGOVo5FZD7fCAlW5LbsIufgWzSnKPNpDhK94OQYmkbvvcQCxt-OY-RA.webp'></img>
                        </button>
                        <button onClick={() => {
                            diceDispatch(index, 23)
                            setOpen(false)
                        }}>
                            <img src='https://i.namu.wiki/i/tZ57UGgMvak9aOEJybYd5XrM8Cxd7axLm9BiCvwEY8V2pwhj9X_zKAZnJylmeSfJRX_5uz4cj1jdxulyy4uGGg.webp'></img>
                        </button>
                        <button onClick={() => {
                            diceDispatch(index, 24)
                            setOpen(false)
                        }}>
                            <img src='https://i.namu.wiki/i/2dK2Y3SegbV9IxtXiCAqOUZV1DDmz9GZJZTt4tqXlxE00w6saG1omGuPOsidcjSfUnbjDJmr6geQ-vFdeXRYWQ.webp'></img>
                        </button>
                    </div>
                    <div className='dice-row'>
                        <button onClick={() => {
                            diceDispatch(index, 25)
                            setOpen(false)
                        }}>
                            <img src='https://i.namu.wiki/i/aX1JX3bF3AVr9U459m0uIJUP5kD0pUjrpuuYCor54CiO24Gq6XtKUG9wEZo44uvUw5_SZ3oNtO1DO8oKd_yxww.webp'></img>
                        </button>
                        <button onClick={() => {
                            diceDispatch(index, 26)
                            setOpen(false)
                        }}>
                            <img src='https://i.namu.wiki/i/iqnTWLmbkeB_qJZ3RHEDKm8s40Hc6I8kIFcTPp15CEQ2RURWZtf6--dX4c-dTH-PHELgKPRWI45xVyGOtts5NQ.webp'></img>
                        </button>
                        <button onClick={() => {
                            diceDispatch(index, 27)
                            setOpen(false)
                        }}>
                            <img src='https://i.namu.wiki/i/2FuHZTPSfTykYxWxnvks64ZJvBlfEve2gwY125Ifwi_Q2oR026fPM-gis7PKXp2hRQSigC2k4qpbC_Mf4TjVMw.webp'></img>
                        </button>
                        <button onClick={() => {
                            diceDispatch(index, 28)
                            setOpen(false)
                        }}>
                            <img src='https://i.namu.wiki/i/8Y2qfge8amIaLKezSOAYqSnVTSsaPAf4vajeSubgA-JNjFpCRuQqXe5wFnSbJehry5QHwLQiLr-BwtaQGjloBw.webp'></img>
                        </button>
                        <button onClick={() => {
                            diceDispatch(index, 29)
                            setOpen(false)
                        }}>
                            <img src='https://i.namu.wiki/i/OWHX5ENzyKFmWoHbvgnifzpGMfdIzcnjjdHOPZEA4XKivCl9wNVaBHdpSOwtdh77D7Sly2YgyqqhN2uVmuQMbg.webp'></img>
                        </button>
                        <button onClick={() => {
                            diceDispatch(index, 30)
                            setOpen(false)
                        }}>
                            <img src='https://i.namu.wiki/i/tPlcMhxs73QngZw_c0rQoUzorBIdq9-SE0fthwvosBwGtTk4jFPmIuAp_TQzzq-Ic-UjdkIJVYFwFgTFF3gUig.webp'></img>
                        </button>
                        <button onClick={() => {
                            diceDispatch(index, 31)
                            setOpen(false)
                        }}>
                            <img src='https://i.namu.wiki/i/4bHJl8uVZ4kx1MBYZbjgeT2X-3irFdG1jm-fSJ20KE2YNwTdmM8G5i5jyi5EPMHnR_B8whyTuKiE_cmXpOHgQg.webp'></img>
                        </button>
                        <button onClick={() => {
                            diceDispatch(index, 32)
                            setOpen(false)
                        }}>
                            <img src='https://i.namu.wiki/i/EOAV6Kmdu4pj2fRgtzNDhBwad35N7dwXpnYm-EXl-4rR_ZAI0SlcGH8orjPIjei5MRiTxugPysgsSQRiLtIWDw.webp'></img>
                        </button>
                    </div>
                    <div className='dice-row'>
                        <button onClick={() => {
                            diceDispatch(index, 33)
                            setOpen(false)
                        }}>
                            <img src='https://i.namu.wiki/i/6dIW_RQ6MvHHkYxV806K19PrDxrgXP0Cd3jMDzCipvCti_9bzZJMAQlnKcHcT9TxgbsB2BdBrMwpeNMpPvZbkA.webp'></img>
                        </button>
                        <button onClick={() => {
                            diceDispatch(index, 34)
                            setOpen(false)
                        }}>
                            <img src='https://i.namu.wiki/i/C0Vfl2Pg1-AEUq1pfwF4NMByc0vaRyqRE4Lemxad_n9HqvH5_UPTgPls6BHKRcd1La3aznBPTT587z_8sJJjfA.webp'></img>
                        </button>
                        <button onClick={() => {
                            diceDispatch(index, 35)
                            setOpen(false)
                        }}>
                            <img src='https://i.namu.wiki/i/PI-IFN_0Q41LKcO3bDipg73vjktGbAo-pqQ6LX5ZcODm0O4essgTjZ300BpSiNa4WukqJcIx80ioWv8sA1v5oA.webp'></img>
                        </button>
                        <button onClick={() => {
                            diceDispatch(index, 36)
                            setOpen(false)
                        }}>
                            <img src='https://i.namu.wiki/i/A40qwZ5yhPfHkZySTeGD7LTuYtUi02hmq_YO1HeNno2I_z05A2nppFwa7bUnMwk0ocV-w1on9iqIGlkXflkm6w.webp'></img>
                        </button>
                        <button onClick={() => {
                            diceDispatch(index, 37)
                            setOpen(false)
                        }}>
                            <img src='https://i.namu.wiki/i/vsCVwy9jXPt3BRDItZ5nXglGlacv1VWM6qwpsW5eN9JbpjAIhI6W0Y46-d4XKp40hftPTLDYDcNSRznXXO46bg.webp'></img>
                        </button>
                        <button onClick={() => {
                            diceDispatch(index, 38)
                            setOpen(false)
                        }}>
                            <img src='https://i.namu.wiki/i/0KFc-U-oNR7Qr9VSTY60kqfF5Z-4kbirYZ40tKPtm4GgnOIaGboK0dSyJFbZ_Hv6keJRs9qux96jJm-wuUzPLw.webp'></img>
                        </button>
                    </div>
                </div> :
                <div></div>

            }
            <div className='class-box'>
                {counter.count <= 7 ? <button disabled>-</button> :
                    <button onClick={() => dispatch(decreaseCount(index))}>-</button>
                }
                <span style={{ margin: '5px' }} >{counter.count}</span>
                {counter.count >= 15 ? <button disabled>+</button> :
                    <button onClick={() => dispatch(increaseCount(index))}>+</button>
                }
            </div>
        </div>
    )
}

export default ChooseDice