import creditIcon from '@/assets/icons/credit.svg';
import PrimaryButton from '@/components/PrimaryButton';

function DonationCard({ donation }) {
  const { receivedDonations, targetDonation, subtitle, title, idol, deadline } =
    donation;
  const { name, group, profilePicture } = idol;

  const currentDonationPercentage = (receivedDonations / targetDonation) * 100;

  const receivedCredit = receivedDonations.toLocaleString();

  const deadlineDate = new Date(deadline);
  const today = new Date();
  const diffTime = deadlineDate - today;
  const remainingDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return (
    <div class="w-[158px] mobile:w-[282px] relative flex flex-col gap-[10px] mobile:gap-3 bg-midnightBlack">
      {/* 후원 아이돌 이미지 */}
      <div class="w-full h-[206px] mobile:h-[293px] relative overflow-hidden flex items-center justify-center rounded-t-lg">
        <img
          class="w-full h-full object-cover"
          src={profilePicture}
          alt={name}
        />
        {/* 후원 아이돌 이미지 그라데이션 효과 */}
        <div class="w-full h-1/3 absolute flex justify-center bottom-0 bg-gradient-to-t from-black to-transparent">
          {/* 후원하기 버튼 */}
          <PrimaryButton
            styles={
              'w-[142px] mobile:w-[234px] h-[31px] mobile:h-[40px] absolute bottom-[8px] mobile:bottom-[20px] font-pretendard font-medium text-[13px] text-white'
            }
          >
            후원하기
          </PrimaryButton>
        </div>
      </div>
      {/* 후원 정보 */}
      <div class="w-full h-[87px] mobile:h-[97px] relative bg-black">
        <ul>
          {/* 후원 부제목 */}
          <li class="font-pretendard text-[12px] mobile:text-[16px] font-[300] text-silverGray">
            {subtitle}
          </li>
          {/* 후원 제목 */}
          <li class="font-pretendard font-regular text-[14px] mobile:text-[18px] text-softWhite">{`${group} ${name} ${title}`}</li>
          {/* 후원 현황 */}
          <li class="w-full flex flex-col gap-1 absolute bottom-0">
            <div class="flex justify-between">
              {/* 현재 후원된 크레딧 개수 */}
              <div class="flex items-center">
                <img src={creditIcon} alt="credit" />
                <div class="font-pretendard font-[300] text-[12px] text-coralRed">
                  {receivedCredit}
                </div>
              </div>
              {/* 남은 후원 일자 */}
              <div class="font-pretendard font-[300] text-[12px] text-softWhite">{`${remainingDays}일 남음`}</div>
            </div>
            {/* 후원 현황 차트 */}
            <div class="w-full h-[1.5px] bg-white">
              <div
                class="h-full bg-coralRed"
                style={{ width: `${currentDonationPercentage}%` }}
              ></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DonationCard;
