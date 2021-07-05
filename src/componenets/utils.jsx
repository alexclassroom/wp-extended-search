import { useEffect } from 'react';

export const GoogleAd = ({ slot, format = 'auto', responsive = 'true' }) => {

    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    });

    return (
        <ins className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-7348916268225140"
            data-ad-slot={slot}
            data-ad-format={format}
            data-full-width-responsive={responsive}></ins>
    )
};