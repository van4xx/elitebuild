import React, { useEffect, useRef } from 'react';

interface MapProps {
  onSelectPoint?: (point: any) => void;
}

const Map: React.FC<MapProps> = ({ onSelectPoint }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Загрузка скрипта API СДЭК
    const script = document.createElement('script');
    script.src = 'https://widget.cdek.ru/widget/widget_cdn.js';
    script.async = true;
    
    script.onload = () => {
      if (mapRef.current) {
        // @ts-ignore - так как типы СДЭК не определены
        const widget = new window.CDEKWidget({
          from: 'Москва',
          defaultLocation: 'Москва',
          root: mapRef.current,
          type: 'PVZ',
          onChoose: (point: any) => {
            if (onSelectPoint) {
              onSelectPoint(point);
            }
          },
          // Можно настроить внешний вид виджета
          width: '100%',
          height: '400px',
          apiKey: 'YOUR_CDEK_API_KEY', // Замените на ваш API ключ СДЭК
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      // Удаляем скрипт при размонтировании компонента
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, [onSelectPoint]);

  return (
    <div 
      ref={mapRef} 
      style={{ 
        width: '100%', 
        height: '400px',
        border: '1px solid #ddd',
        borderRadius: '4px'
      }} 
    />
  );
};

export default Map; 