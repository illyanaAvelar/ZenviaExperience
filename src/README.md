# Órion - Hack a Rocket

A plataforma Órion foi criada durante a hackathon Hack a Rocket, realizada pela Shawee juntamente com a Zenvia e diversas empresas parceiras.

Órion tem a finalidade de captar e fidelizar novos clientes para o pequeno empreendedor. Essa preocupação surgiu após conversas com pequenos empreendedores e experiências pessoais, em que diversas vezes o cliente consome produtos de grandes empresas, pagando mais caro, pela comodidade.
Nós oferecemos essa comodidade através de um aplicativo que reúne os pequenos, sendo possível comprar de vários comerciantes pagando apenas um frete, também com opção de retirada. Assim, faremos com que os clientes migrem seu consumo para o pequeno comércio.

Também apresentamos outras vantagens, como a possibilidade de vender sua mão de obra, e a monetização por comissão, fazendo com que o fornecedor de serviços/mercadorias em nossa plataforma não precise pagar altas taxas para ter seu cadastro no App.

## Uso de APIs

Para atrair cada vez mais clientes, contamos com a opção de compartilhar o aplicativo pelo WhatsApp e SMS, além de se cadastrar para receber novidades e promoções.
Isso foi possível a partir do uso de APIs disponibilizadas pela Zenvia para envio de mensagem. É possível perceber a eficiência das mesmas pelo código contido em "Confirmação" (tela que confirma que seu pagamento foi efetuado).

## Telas

## Vídeos

Demo
https://youtu.be/7PUO5bklUDM

Pitch
https://youtu.be/EO-H8uIcDes

## Equipe

## Diagrama de Atividades

## Requisitos 

Requisitos Funcionais do Sistema

- O sistema deve persistir o cadastro do cliente
- O sistema deve persistir a avaliação dos usuários
- Deve ser possível pesquisar por ítens específicos 
- Deve ser possível filtrar a busca por preço e distância
- Deve ser possível visualizar produtos/serviços de uma categoria específica
- Deve ser possível realizar o cancelamento do pedido antes da confirmação do pagamento
- O sistema deve persistir dados de CPF e foto dos prestadores de serviço
- O sistema somente deve permitir fornecedores de serviço cadastrados
- O sistema somente deve permitir vendedores cadastrados
- Deve ser possível acompanhar o andamento da solicitação
- Deve ser possível ao comprador visualizar os ítens do carrinho
- Deve ser possível ao comprador adicionar itens ao carrinho
- Deve ser possível ao comprador excluir itens do carrinho
- Deve ser possível ao comprador editar itens do carrinho
- A quantidade de itens no carrinho deve ser exibida 
- O sistema deve possibilitar encerrar o pedido (fechar o carrinho)
- O sistema deve registrar os itens do pedido so ser fechado, valor, loja, comprador
- O sistema deve registrar o valor do serviço ao ser solicitado
- O sistema deve registrar os dados do prestador de serviço ao ser solicitado
- O sistema deve identificar o cliente no final do pedido
- O sistema deve permitir ao cliente se cadastrar ao final do pedido
- Ao visualizar produtos e serviços deve ser exibido valor, descrição, preço, distância
- Ao visualizar serviços deve ser exibido foto e nome do prestador

Requisitos não Funcionais do Sistema

- O sistema não deve demorar mais de 3 segundos para exibir os resultados da busca
- O sistema deve possuir design responsivo
- O sistema deve funcionar em diferentes sistemas operacionais moveis
