import { LoadingOutlined } from '@ant-design/icons';
import axios from '../../../core/axios';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const renderTextInfo = ({ hash, verified }: any) => {
  if (hash) {
    if (verified) {
      return {
        status: 'success',
        title: 'Done!',
        message: 'The account has been successfully confirmed!',
      };
    } else {
      return {
        status: 'error',
        title: 'Error',
        message: 'You have specified a non-existent or invalid hash.',
      };
    }
  } else {
    return {
      status: 'info',
      title: 'Confirm your email',
      message: 'The link with the account confirmation has been sent to the E-Mail.',
    };
  }
};

const CheckEmailInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const hash = location.search.split('hash=')[1];
  const [verified, setVerified] = useState(false);
  const [checking, setChecking] = useState(!!hash);
  const [info, setInfo] = useState(renderTextInfo({ hash, checking, verified }));

  const setStatus = ({ checking, verified }: any) => {
    setInfo(renderTextInfo({ hash, checking, verified }));
    setVerified(verified);
    setChecking(checking);
  };

  useEffect(() => {
    if (hash) {
      axios.get(`/user/verify?hash=${hash}`)
        .then(() => {
          setStatus({ verified: true, checking: false });
        })
        .catch(() => {
          setStatus({ verified: false, checking: false });
        });
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen p-5 bg-blue-100 min-w-screen">
      {!checking ? <div className="max-w-xl p-8 text-center text-gray-800 bg-white shadow-xl lg:max-w-3xl rounded-3xl lg:p-12">
        <h3 className="text-2xl">Thanks for signing up for Websitename!</h3>
        <div className="flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-green-400" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
              d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
          </svg>
        </div>

        <p>{info.title}</p>
        <div className="mt-4">
          <p className="mt-4 text-sm">{info.message}</p>
          {info.status === 'success' &&
            verified && <button onClick={() => navigate("/authorization")} className="px-2 py-2 text-blue-200 bg-blue-600 rounded">Login</button>}
        </div>

      </div> : <div className="flex">
        <LoadingOutlined
          style={{
            fontSize: 24,
          }}
          spin
        />
      </div>}
    </div>
    // <div>
    //     {!checking ? (
    //         info.status === 'success' &&
    //         verified && (
    //             <button onClick={() => navigate("/authorization")}>
    //                 Войти
    //             </button>
    //         )
    //     ) : (
    //         <Box sx={{ display: 'flex' }}>
    //             <CircularProgress />
    //         </Box>
    //     )}
    // </div>
  );
};

export default CheckEmailInfo;