<template>
    <div class="font-lato ml-auto mr-auto w-full">
        <div class="rounded-lg bg-white">
            <div class="h-[216px] flex border-b border-[#BDBDBD]">
                <div class="rounded-tl-lg w-[199px] h-[216px] border-b-[#BDBDBD]">
                    <img src="../assets/img/DoctorPage__Banner.jpg" alt="ProfilePicture"
                        class="w-full h-full object-cover ">
                </div>
                <div class="p-5 flex justify-between w-full">
                    <div class="w-3/5">
                        <h2 class="text-titleColor font-bold text-2xl pb-5">Name & Surname</h2>
                        <div class="flex justify-between w-full">
                            <div class="flex w-2/5 justify-between">
                                <ul class="list-none flex flex-col gap-7">
                                    <li class="font-normal text-sm text-DoctorList">Specialty</li>
                                    <li class="font-normal text-sm text-DoctorList">Working section</li>
                                    <li class="font-normal text-sm text-DoctorList">Seniority</li>
                                </ul>
                                <ul class="list-none flex flex-col gap-6">
                                    <li class="font-bold text-[16xx] leading-none">Doctor</li>
                                    <li class="font-bold text-[16xx] leading-none"></li>
                                    <li class="font-bold text-[16xx] leading-none"></li>
                                </ul>
                            </div>
                            <div class="flex w-2/5 justify-between">
                                <ul class="list-none flex flex-col gap-7">
                                    <li class="font-normal text-sm text-DoctorList">Date of entry</li>
                                    <li class="font-normal text-sm text-DoctorList">Work graph</li>
                                </ul>
                                <ul class="list-none flex flex-col gap-6    ">
                                    <li class="font-bold text-[16xx] leading-none"></li>
                                    <li class="font-bold text-[16xx] leading-none"></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="w-12 flex gap-4 h-4">
                        <button>
                            <img src="../assets/img/edit-icon.svg" alt="" class="w-full">
                        </button>
                        <button>
                            <img src="../assets/img/delete-icon.svg" alt="" class="w-full">
                        </button>
                    </div>
                </div>
            </div>
            <div class="p-5 w-full flex flex-col justify-center">
                <h2 class="text-titleColor font-bold text-2xl pb-5">Name & Surname</h2>
                <div class="flex justify-between w-full">
                    <div class="flex w-1/4 justify-between">
                        <ul class="list-none flex flex-col gap-7">
                            <li class="font-normal text-sm text-DoctorList">Date of birth</li>
                            <li class="font-normal text-sm text-DoctorList">Area of birth</li>
                            <li class="font-normal text-sm text-DoctorList">Location</li>
                        </ul>
                        <ul class="list-none flex flex-col gap-6">
                            <li class="font-bold text-[16xx] leading-none">Doctor</li>
                            <li class="font-bold text-[16xx] leading-none"></li>
                            <li class="font-bold text-[16xx] leading-none"></li>
                        </ul>
                    </div>
                    <div class="flex w-1/4 justify-between">
                        <ul class="list-none flex flex-col gap-7">
                            <li class="font-normal text-sm text-DoctorList">Marital status</li>
                            <li class="font-normal text-sm text-DoctorList">Information</li>
                        </ul>
                        <ul class="list-none flex flex-col gap-6    ">
                            <li class="font-bold text-[16xx] leading-none"></li>
                            <li class="font-bold text-[16xx] leading-none"></li>
                        </ul>
                    </div>
                    <div class="flex w-1/4 justify-between">
                        <ul class="list-none flex flex-col gap-7">
                            <li class="font-normal text-sm text-DoctorList">Phone Number</li>
                            <li class="font-normal text-sm text-DoctorListт ">From family members
                                phone number
                            </li>
                        </ul>
                        <ul class="list-none flex flex-col gap-6    ">
                            <li class="font-bold text-[16xx] leading-none"></li>
                            <li class="font-bold text-[16xx] leading-none"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-9 rounded-lg bg-white w-full">
            <div class="flex justify-between p-6 pb-5">
                <h1 class="text-titleColor font-bold leading-[26px] text-[20px] font-lato m-6">Labor activity</h1>
                <button
                    class="pl-3 pr-3 rounded-xl text-center flex gap-2  items-center bg-[#336CFB] cursor-pointer text-white active:opacity-80 active:translate-y-1">
                    <img src="../assets/img/add__icon.svg" alt="" class="w-4"> New business activity history</button>
            </div>
            <table class="w-full">
                <thead class="w-full">
                    <tr class="text-titleColor font-bold font-lato text-sm bg-[#fafafa] pb-5 pt-5 w-full h-14">
                        <th class="text-sm font-bold text-titleColor">Name of the institution</th>
                        <th class="text-sm font-bold text-titleColor">Duration of work activity</th>
                        <th class="text-sm font-bold text-titleColor">Position</th>
                        <th class="text-sm font-bold text-titleColor">Tools</th>
                        
                    </tr>
                </thead>
                <tbody class="mt-5">
                    <tr class="w-full font-normal font-lato text-sm text-secondary border-b border-[#DBDDE0] pt-5 pb-5 h-14">
                        <td class="font-normal text-sm text-center text-secondary">Lorem, ipsum.</td>
                        <td class="font-normal text-sm text-center text-secondary">Lorem, ipsum.</td>
                        <td class="font-normal text-sm text-center text-secondary">Lorem, ipsum.</td>
                        <th class="">
                            <div class="flex gap-3 justify-center items-center">
                                <button class="p-0.5 w-5">
                                    <img src="../assets/img/edit-icon.svg" alt="" class="w-4">
                                </button>
                                
                                <button class="p-0.5 w-5"><img src="../assets/img/delete-icon.svg" alt=""
                                        class="w-4">
                                </button>
                            </div>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>


<script>
export default {

}
</script>

<style lang="sass" scoped>

</style>
