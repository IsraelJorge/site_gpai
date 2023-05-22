import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function UserRegistration(){
    return(
        <>
            <main className="p-5 text-primary ">
                <p>Home {'>'} Cadastro</p>
                <h1 className='text-4xl my-3'>Formulário de Cadastro</h1>
                <Input name='name' label='Nome:'/>

                <div className=' flex justify-between'>
                    <Input name='cell' label='Telefone:' className='w-1/2 mr-3' />
                    <Input name='cpf' label='Cpf:' className='w-1/2' mask={'cpf'}/>
                </div>

                <Input name='address' label='Endereço:'/>
                <p>Desejo me relacionar com a ONG como:</p>
                <div className='flex justify-between mx-2 my-5'>
                    
                    <div >
                        Adotante:
                        <div className='flex'>
                            <p className='flex justify-center items-center'>
                            Sim
                                <input className='mr-3 ml-1' type="radio" name="yadoptant" id="" radioGroup='radotante'/>
                            </p>
                            <p className='flex justify-center items-center'>
                            Não
                                <input className='mr-3 ml-1' type="radio" name="nadoptant" id="" radioGroup='radotante'/>
                            </p>
                            
                        </div>
                    </div>
                    
                    <div >
                    Mantenedor:
                        <div className='flex'>
                            <p className='flex justify-center items-center'>
                            Sim
                                <input className='mr-3 ml-1' type="radio" name="ymaintainer" id="" radioGroup='rmantenedor'/>
                            </p>
                            <p className='flex justify-center items-center'>
                            Não
                                <input className='mr-3 ml-1' type="radio" name="nmaintainer" id="" radioGroup='rmantenedor'/>
                            </p>
                            
                        </div>
                    </div>
                    <div >
                    Protetor:
                        <div className='flex'>
                            <p className='flex justify-center items-center'>
                            Sim
                                <input className='mr-3 ml-1' type="radio" name="yprotector" id="" radioGroup='rprotetor'/>
                            </p>
                            <p className='flex justify-center items-center'>
                            Não
                                <input className='mr-3 ml-1' type="radio" name="nprotector" id="" radioGroup='rprotetor'/>
                            </p>
                            
                        </div>
                    </div>
                    <p className='text-xs'>Permitido marcar mais de um modo</p>
                </div>

                <p>Perguntas com * serão obrigatórias somente se houver marcado sim para adotante ou protetor</p>
                <p>Os dados do cadastro poderão ser alterados em qualquer momento</p>

                <div className='flex justify-end mt-8'>
                <Button children='Cadastrar'/> 
                </div>
            </main>
        </>
    )
}