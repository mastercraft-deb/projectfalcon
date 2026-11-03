/* =====================================================
   Sincronização do Avatar nas Páginas de Cursos
   (pages/courses/*.html)

   - Lê a foto de perfil personalizada salva no localStorage ('galea_foto_perfil')
   - Atualiza dinamicamente o <a class="avatar"><img src="..."></a>
   - Ouve o evento 'storage' para atualizar instantaneamente se a foto for alterada em outra aba
   - Ouve mensagens da janela se estiver em contexto compartilhado
   ===================================================== */

(() => {
    'use strict';

    const CHAVE_FOTO = 'galea_foto_perfil';

    function sincronizarAvatar() {
        const avatarImg = document.querySelector('.avatar img');
        if (!avatarImg) return;

        try {
            const fotoSalva = localStorage.getItem(CHAVE_FOTO);
            if (fotoSalva && (fotoSalva.startsWith('data:image/') || fotoSalva.includes('images/'))) {
                avatarImg.src = fotoSalva;
            }
        } catch (e) {
            // Se o armazenamento não estiver disponível, mantém o avatar padrão
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', sincronizarAvatar);
    } else {
        sincronizarAvatar();
    }

    // Atualiza automaticamente caso o usuário troque a foto em outra página/aba
    window.addEventListener('storage', (e) => {
        if (e.key === CHAVE_FOTO) {
            sincronizarAvatar();
        }
    });

    // Atualiza também se a janela receber foco novamente
    window.addEventListener('focus', sincronizarAvatar);
})();

