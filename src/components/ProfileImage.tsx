"use client";   // Adiciona a diretiva use client para importar o hook useClient
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ProfileImage = () => {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const response = await fetch('https://api.github.com/users/eliudefrancisco14');
        if (response.ok) {
          const userData = await response.json();
          setAvatarUrl(userData.avatar_url);
        } else {
          console.error('Erro ao buscar dados do usuário no GitHub');
        }
      } catch (error) {
        console.error('Erro na requisição para o GitHub:', error);
      }
    };

    fetchAvatar();
  }, []);

  return (
    <div className="mt-5">
      {avatarUrl && (
        <Image
          src={avatarUrl}
          alt="Eliude Francisco"
          width={200}
          height={200}
        />
      )}
    </div>
  );
};

export default ProfileImage;
