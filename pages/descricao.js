// pages/descricao.js

import Link from 'next/link';

export default function Descricao() {
  return (
    <div>
      <h1>Página de Descrição</h1>
      <p>Esta é a página de descrição. Somente usuários autenticados podem acessá-la.</p>
      <Link href="/#">Voltar para o Menu</Link>
    </div>
  );
}
